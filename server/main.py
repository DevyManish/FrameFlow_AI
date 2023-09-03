import cv2
import firebase_admin
from firebase_admin import credentials, storage
import streamlit as st


# Initialize the Firebase Admin SDK
cred = credentials.Certificate("service_account.json")

# Check if Firebase Admin SDK is already initialized
if not firebase_admin._apps:
    firebase_admin.initialize_app(cred, {
        'storageBucket': 'hackarthon-b3435.appspot.com'
    })

# License Plate Detection
harcascade = "model/haarcascade_russian_plate_number.xml"

# Create a Streamlit title and description
st.title("DVR Footage Analyser")
# st.write("This Streamlit app detects license plates using OpenCV and uploads them to Firebase Cloud Storage.")

# Create a Streamlit placeholder for displaying images
image_placeholder = st.empty()

# Create a button to start/stop the detection process
start_detection = st.button("Start Detection")
stop_detection = st.button("Stop Detection")

cap = None
detection_running = False
count = 0

# Firebase Cloud Storage bucket
bucket = storage.bucket()

while True:
    if start_detection and not detection_running:
        cap = cv2.VideoCapture(1, cv2.CAP_DSHOW)  # Use DirectShow on Windows
  # Use 0 for the default camera
        cap.set(3, 640)  # Width
        cap.set(4, 480)  # Height
        detection_running = True
        start_detection = False

    if stop_detection and detection_running:
        cap.release()
        cv2.destroyAllWindows()
        detection_running = False
        stop_detection = False

    if detection_running:
        success, img = cap.read()

        if not success:
            break

        # License Plate Detection
        plate_cascade = cv2.CascadeClassifier(harcascade)
        img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        plates = plate_cascade.detectMultiScale(img_gray, 1.1, 4)

        for (x, y, w, h) in plates:
            area = w * h

            if area >min_area:
                cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)
                cv2.putText(img, "Number Plate", (x, y - 5), cv2.FONT_HERSHEY_COMPLEX_SMALL, 1, (255, 0, 255), 2)

                img_roi = img[y: y + h, x:x + w]

                # Save the captured plate image to Firebase Cloud Storage
                plate_filename = "plates/scaned_plate_" + str(count) + ".jpg"
                _, img_encoded = cv2.imencode(".jpg", img_roi)
                img_bytes = img_encoded.tobytes()
                blob = bucket.blob("plate/" + plate_filename)
                blob.upload_from_string(img_bytes, content_type="image/jpeg")
                st.write(f"Plate image uploaded to Firebase Cloud Storage as {blob.name}")
                count += 1

        # Display the image with detected plates in Streamlit
        image_placeholder.image(img, channels="BGR", use_column_width=True)

# Release resources when the app is closed
if cap is not None:
    cap.release()
cv2.destroyAllWindows()

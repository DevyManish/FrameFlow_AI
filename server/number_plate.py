import cv2
import firebase_admin
from firebase_admin import credentials, storage

# Initialize Firebase Admin SDK with your service account credentials
cred = credentials.Certificate("service_account.json")
firebase_admin.initialize_app(cred, {
    'storageBucket': 'hackarthon-b3435.appspot.com'
})

# License Plate Detection

harcascade = "model/haarcascade_russian_plate_number.xml"
# video_path = r"C:\Users\harsh\OneDrive\Desktop\veh2.mp4"
cap = cv2.VideoCapture(1)

cap.set(3, 640)  # Width
cap.set(4, 480)  # Height

min_area = 500
count = 0

# Firebase Cloud Storage bucket
bucket = storage.bucket()

while True:
    success, img = cap.read()

    if not success:
        break

    # License Plate Detection
    plate_cascade = cv2.CascadeClassifier(harcascade)
    img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    plates = plate_cascade.detectMultiScale(img_gray, 1.1, 4)

    for (x, y, w, h) in plates:
        area = w * h

        if area > min_area:
            cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)
            cv2.putText(img, "Number Plate", (x, y - 5), cv2.FONT_HERSHEY_COMPLEX_SMALL, 1, (255, 0, 255), 2)

            img_roi = img[y: y + h, x:x + w]

            # Save the captured plate image to Firebase Cloud Storage
            plate_filename = "plates/scaned_plate_" + str(count) + ".jpg"
            _, img_encoded = cv2.imencode(".jpg", img_roi)
            img_bytes = img_encoded.tobytes()
            blob = bucket.blob("plate/" + plate_filename)
            blob.upload_from_string(img_bytes, content_type="image/jpeg")
            print(f"Plate image uploaded to Firebase Cloud Storage as {blob.name}")
            count += 1

    # Display the image with detected plates
    cv2.imshow("License Plate Detection", img)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()

import html2canvas from 'html2canvas';
import { screenshotUpload } from 'services/ApiService';

export const takeScreenshot = (activityLogId) => {
    console.log("takeScreenshot");

    html2canvas(document.body).then(async canvas => {
        // Convert canvas to base64 image data
        const imageData = canvas.toDataURL('image/png');
        // Send imageData to server or save locally as needed
        console.log('Screenshot taken:', imageData);

        try {
            const response = await screenshotUpload({ activityLogId, file: imageData });
            console.log("response", response);
        } catch (error) {
            console.log("error", error);
        }
    });
}
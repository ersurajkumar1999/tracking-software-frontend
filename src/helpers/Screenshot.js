import html2canvas from 'html2canvas';

export const takeScreenshot = () => {
    console.log("takeScreenshot");
    html2canvas(document.body).then(canvas => {
        // Convert canvas to base64 image data
        const imageData = canvas.toDataURL('image/png');
        // Send imageData to server or save locally as needed
        console.log('Screenshot taken:', imageData);
    });
}
export default function processGallery(data) {
    let i, images = [];
    for (i= 0; i < data.length; i++) {
        images.push(
            [
                "/img/pet/" + data[i].pet_id + "/moment/" + data[i].image_name,
                data[i].moment_message,
                "/moment/" + data[i].moment_id
            ]
        );
    }
    return images;
}
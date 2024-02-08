export default function MainImage({src, alt}) {
    const $img = document.createElement("img");
    $img.classList.add("main-image");
    $img.src = src;
    $img.alt = alt;
    return $img;
};

export default function Introduction({title, content}) {
    const COMPONENT_NAME = "introduction"
    const $div = document.createElement("div"),
        $h1 = document.createElement("h1"),
        $p = document.createElement("p");
    $div.classList.add(COMPONENT_NAME);
    $h1.classList.add(COMPONENT_NAME + "__title");
    $p.classList.add(COMPONENT_NAME + "__content");
    $h1.textContent = title;
    $p.textContent = content;
    $div.append($h1, $p);
    return $div;
};

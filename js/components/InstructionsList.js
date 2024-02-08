export default function InstructionsList(items) {
    // *** *** *** Variables *** *** ***
    const ELEMENT_NAME = "instructions-list";
    const $template = document.getElementById(ELEMENT_NAME + "-component").content,
        $clone = document.importNode($template, true),
        $ol = $clone.querySelector("[data-ol]"),
        $fragment = document.createDocumentFragment();
    // *** *** *** Execution *** *** ***
    items.forEach(elm => {
        let $li = document.createElement("li"),
            $p = document.createElement("p"),
            $span = document.createElement("span");
        $li.classList.add(ELEMENT_NAME + "-item");
        $p.classList.add(ELEMENT_NAME + "-item__p");
        $span.classList.add(ELEMENT_NAME + "-item-p__span");
        $span.textContent = elm[0] + ": ";
        $p.append($span, elm[1]);
        $li.append($p);
        $fragment.append($li);
    });
    $ol.append($fragment);
    return $clone;
};

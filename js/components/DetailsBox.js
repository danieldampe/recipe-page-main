export default function DetailsBox({title, items}) {
    // *** *** *** Variables *** *** ***
    const ELEMENT_NAME = "details-box";
    const $template = document.getElementById(ELEMENT_NAME + "-component").content,
        $clone = document.importNode($template, true),
        $title = $clone.querySelector("[data-title]"),
        $ul = $clone.querySelector("[data-ul]"),
        $fragment = document.createDocumentFragment();
    // *** *** *** Execution *** *** ***
    $title.textContent = title;
    items.forEach(elm => {
        let $li = document.createElement("li"),
            $p = document.createElement("p"),
            $span = document.createElement("span");
        $li.classList.add(ELEMENT_NAME + "-item");
        $p.classList.add(ELEMENT_NAME + "-item__p");
        $span.classList.add(ELEMENT_NAME + "-item-p__span");
        $span.textContent = elm[0] + ": ";
        $li.append($p);
        $p.append($span, elm[1]);
        $fragment.append($li);
    });
    $ul.append($fragment);
    return $clone;
};

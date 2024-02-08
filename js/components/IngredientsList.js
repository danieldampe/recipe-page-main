export default function IngredientsList(items) {
    // *** *** *** Variables *** *** ***
    const ELEMENT_NAME = "ingredients-list";
    const $template = document.getElementById(ELEMENT_NAME + "-component").content,
        $clone = document.importNode($template, true),
        $ul = $clone.querySelector("[data-ul]"),
        $fragment = document.createDocumentFragment();
    // *** *** *** Execution *** *** ***
    items.forEach(elm => {
        let $li = document.createElement("li");
        $li.classList.add(ELEMENT_NAME + "-item");
        $li.textContent = elm;
        $fragment.append($li);
    });
    $ul.append($fragment);
    return $clone;
};

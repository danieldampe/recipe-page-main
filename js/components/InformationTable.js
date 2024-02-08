export default function InformationTable({title, content, table}) {
    // *** *** *** Variables *** *** ***
    const ELEMENT_NAME = "information-table";
    const $template = document.getElementById(ELEMENT_NAME + "-component").content,
        $clone = document.importNode($template, true),
        $title = $clone.querySelector("[data-title]"),
        $content = $clone.querySelector("[data-content]"),
        $table = $clone.querySelector("[data-table]"),
        $fragment = document.createDocumentFragment();
    // *** *** *** Execution *** *** ***
    $title.textContent = title;
    $content.textContent = content;
    table.forEach(arr => {
        let $row, $item;
        $row = document.createElement("div");
        $row.classList.add(ELEMENT_NAME + "-row");
        arr.forEach(item => {
            $item = document.createElement("div");
            $item.classList.add(ELEMENT_NAME + "-item");
            $item.textContent = item;
            $row.append($item);
        });
        $fragment.append($row);
    });
    $table.append($fragment);
    return $clone;
}

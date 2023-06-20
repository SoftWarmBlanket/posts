function fillNavSidebar() {
    const root = document.getElementById("main-ele");
    const sidebar = document.getElementById("nav-sidebar");

    let tree = [];


    function buildHeaderTree(base, tagname) {
        let tree = [];
        for (let child of base.getElementsByTagName(tagname)) {
            if (tagname === 'h2' || tagname === 'h3') {
                tree.push([child, buildHeaderTree(child.parentElement, tagname === 'h2' ? 'h3' : 'h4')]);
            } else {
                tree.push([child, []]);
            }
        }
        return tree;
    }
    const headerTree = buildHeaderTree(root, 'h2');

    function genSidebarFromHeaderTree(destination, treeNode) {
        let [node, children] = treeNode;
        const sidebarItem = document.createElement('li');
        let sublist = document.createElement('ul');
        if (children.length === 0) {
            sidebarItem.innerHTML = `<a href="#${node.parentElement.id}">${node.innerText}</a>`;
            sidebarItem.appendChild(sublist);
        } else {
            const details = document.createElement('details');
            const summary = document.createElement('summary');
            summary.innerHTML = `<a href="#${node.parentElement.id}">${node.innerText}</a>`;
            sidebarItem.appendChild(details);
            details.appendChild(summary);
            details.appendChild(sublist);
            details.open = node.tagName === 'H2';
        }
        destination.appendChild(sidebarItem);

        for (let subnode of children) {
            genSidebarFromHeaderTree(sublist, subnode);
        }
    }

    sidebar.innerHTML = '';
    for (let node of headerTree) {
        genSidebarFromHeaderTree(sidebar, node);
    }

}

function addHorizontalRules() {
    const root = document.getElementById("main-ele");

    for (let header of root.getElementsByTagName('h2')) {
        let nextEle = header.nextElementSibling;
        if (nextEle !== null && nextEle.tagName.toUpperCase() !== 'HR') {
            header.insertAdjacentElement('afterend', document.createElement('hr'));
        }
    }
}

window.onload = function() {
    fillNavSidebar();
    addHorizontalRules();
}

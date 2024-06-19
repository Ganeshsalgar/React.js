function Customrender(reactElement, mainContainer ){
    // const DomElement = document.createElement(reactElement.type)
    // DomElement.innerHTML = reactElement.Children

    // DomElement.setAttribute('href' , reactElement.props.href)
    // DomElement.c('target' , reactElement.props.target);

    // mainContainer.appendChild(DomElement)

    // Optimized

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    for (const prop in reactElement.props) {
            if(prop === 'Children') continue;
            domElement.setAttribute(prop , reactElement.props[prop])
        }

        mainContainer.appendChild(domElement)
    }





 
const reactElement = {
    type : 'a',
    props: {
        href : 'http://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root')

Customrender(reactElement , mainContainer);
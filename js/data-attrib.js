function onClickBtn(){

    var elHeading = document.querySelector('h2')
    // var elHeading = document.querySelector('.h2')
    // var elHeading = document.querySelector('#h2')
    
    // Selecting elements using attributes
    
    // var elHeading = document.querySelector('[alt]')
    var elHeading = document.querySelector('[alt="A heading"]')
    // var elHeading = document.querySelector('[alt="A heading"][title="heading"]')

    elHeading.style.backgroundColor = 'lightblue'
}

function onBoxClicked(elBox) {
    
    // getAttribute()

    var altText = elBox.getAttribute('alt')
    console.log('altText: ', altText)
    
    var classes = elBox.getAttribute('class')
    console.log('classes: ', classes)
    
    // getAttribute() with data-attributes

    var maxSpeed = elBox.getAttribute('data-max-speed')
    console.log('maxSpeed: ', maxSpeed)

    var clickCount = elBox.getAttribute('data-click-count')
    console.log('clickCount: ', clickCount)

    // Accessing data-attributes using the dataset object

    console.log('dataset:', elBox.dataset)
    
    elBox.dataset.clickCount = +elBox.dataset.clickCount + 1
    console.log('clickCount:', elBox.dataset.clickCount)

    // Query Selector on a DOM subtree

    // var elHeading = elBox.querySelector('h2')

    // console.log(elHeading)
    // console.dir(elHeading)
}

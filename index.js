window.onload = function() {
    fetch('https://striveschool-api.herokuapp.com/books')
        .then((response) => response.json())
        .then(jsonData => {
            console.log(typeof jsonData[0])
            let body = document.getElementsByTagName('body')[0]
            let text = document.createElement('h3')
            text.innerHTML = 'Product List'
            body.appendChild(text)
            let ul = document.createElement('ul')
            for (let i = 0; i < jsonData.length; i++) {
                let button = document.createElement('button')
                button.innerHTML = 'Add to Cart'
                let skipButton = document.createElement('button')
                skipButton.classList.add('skip-class')
                skipButton.innerHTML = 'Skip'
                let li = document.createElement('li')
                li.innerHTML += `${jsonData[i].title}`
                li.classList.add('primary-li')
                ul.appendChild(li)
                ul.appendChild(button)
                ul.appendChild(skipButton)
                body.appendChild(ul)
            }
            let addedButton = document.getElementsByTagName('button')
            let addedListItem = document.getElementsByTagName('li')
            let newUl = document.createElement('ul')
            let cartText = document.createElement('h3')
            cartText.innerHTML = 'Cart List'
            body.appendChild(cartText)
            for (let i = 0; i < addedButton.length; i++) {
                addedButton[i].addEventListener('click', function addCart() {
                    let delButton = document.createElement('button')
                    delButton.innerHTML = 'Delete Item'
                    delButton.classList.add('btn-class')
                    addedListItem[i].style.color = 'green'
                    let cartListItem = document.createElement('li')
                    cartListItem.classList.add('li-class')
                    cartListItem.innerHTML += addedListItem[i].innerHTML
                    newUl.appendChild(cartListItem)
                    newUl.appendChild(delButton)
                    body.appendChild(newUl)
                    let deleteButton = document.querySelectorAll('.btn-class')
                    let delListItem = document.getElementsByClassName('li-class')
                    for (let i = 0; i < deleteButton.length; i++) {
                        deleteButton[i].addEventListener('click', function delItem() {
                            deleteButton[i].style.display = 'none'
                            delListItem[i].style.display = 'none'
                        })
                    }


                })
            }
            /*let skippedButton = document.getElementsByClassName('skip-class')
            let skipListItem = document.getElementsByClassName('primary-li')
            for (let i = 0; i < skippedButton.length; i++) {
                skippedButton[i].addEventListener('click', function skipItem() {
                    skipListItem[i].style.display = 'none'
                })
            }*/
        })
}
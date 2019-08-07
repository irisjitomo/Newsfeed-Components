/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [ 'Students', 'Faculty', "What's New", 'Tech Trends', 'Music', 'Log Out' ];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

window.addEventListener('load', (e) => {
  const menuButton = document.querySelector('.header');
  
  menuButton.append(makeComponent(menuItems))

	function makeComponent(arr) {
    // new elemets //
		const menuDiv = document.createElement('div');
		const ulItem = document.createElement('ul');
		
		// structure //
    menuDiv.appendChild(ulItem);

    arr.forEach(element => {
      const liItem = document.createElement('li');
      ulItem.appendChild(liItem);
      liItem.textContent = element;
      console.log(element)
    })

    // set content // 
    menuDiv.classList.add('menu');
    
    

    // liItem.textContent = object
		//
    const menuButton = document.querySelector('.menu-button');
		menuButton.addEventListener('click', () => {
			menuDiv.classList.toggle('menu--open');
		});

		return menuDiv;
	}
});

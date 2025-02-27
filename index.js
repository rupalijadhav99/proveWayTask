const hideShowDiv = document.createElement('div');
    hideShowDiv.className = "hideShowDiv";
    hideShowDiv.innerHTML = `
        <div class="size_color">
            <div>Size</div>
            <div>Color</div>
        </div>
        <div class="details">
            <span class="hashtag">#1 </span><select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
            </select>
            <select>
                <option>Black</option>
                <option>White</option>
                <option>Red</option>
            </select>
        </div>
        <div class="details">
            <span class="hashtag">#2 </span><select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
            </select>
            <select>
                <option>Black</option>
                <option>White</option>
                <option>Red</option>
            </select>
        </div>
    `;

    function updateTotal(price, element) {
    document.getElementById('total').innerText = `$${price}.00 USD`;
    document.querySelectorAll('.hideShowDiv').forEach(div => div.remove());

    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('toAddBorder');
    });

    const parentOption = element.closest('.option');

    const radioInput = parentOption.querySelector('input[type="radio"]');
    if (radioInput) {
        radioInput.checked = true;
    }

    parentOption.appendChild(hideShowDiv);
    hideShowDiv.style.display = 'block';
    parentOption.classList.add('toAddBorder');
}


    document.getElementById('addToCart').addEventListener('click', function () {
        const sizeSelects = document.querySelectorAll('.details select:first-of-type');
        const colorSelects = document.querySelectorAll('.details select:last-of-type');
        let isValid = false;

        sizeSelects.forEach((select, index) => {
            if (select.value && colorSelects[index].value) {
                isValid = true;
            }
        });

        if (isValid) {
            document.querySelector('.container').style.opacity = '0.2';
            showModal("Item Added To Cart!", true);
        } else {
            document.querySelector('.container').style.opacity = '0.2';
            showModal("Please Select An Item.", false);
        }
    });

    function showModal(message, shouldRefresh) {
        const modal = document.getElementById('cartModal');
        const modalMessage = document.getElementById('modalMessage');

        modalMessage.innerText = message;
        modal.style.display = 'block';

        document.getElementById('closeModal').addEventListener('click', function () {
            if (shouldRefresh) {
                location.reload();
            } else {
                modal.style.display = 'none';
                document.querySelector('.container').style.opacity = '1';
            }
        });
    }
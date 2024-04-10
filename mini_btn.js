

function addBtn() {
    let todotext = $('#todotext').val();
    let detailtext = $('#detailtext').val();

    let addTodo = `
        <div class="col">
             <div class="card">
                <div class="card-body">
                    <button onclick="deleteBtn()" type="button" class="btn-close" aria-label="Close"></button>
                    <h5 class="card-title">${todotext}</h5>
                    <p class="card-text">${detailtext}</p>
                </div>

            </div>
        </div>
    `;
    $('#sectionCards').append(addTodo);
    alert('추가되었습니다.');
}

function allDeleteBtn() {
    $('#sectionCards').empty();
    alert('전부 삭제되었습니다.');

}

function deleteBtn() {
    let msg = window.confirm('정말 삭제하겠습니까?');
    if (msg) {
        alert('삭제되었습니다.');
    }
    else {
        alert('취소되었습니다.');
    }
    
}

function modifyBtn() {
    alert('작동 체크');
}
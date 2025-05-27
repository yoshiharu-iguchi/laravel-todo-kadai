const editTagForm = document.forms.editTagForm;

const deleteTagForm = document.forms.deleteTagForm;

const deleteMessage = document.getElementById('deleteTagModalLabel');

document.getElementById('editTagModal').addEventListener('show.bs.modal',(event) => {
    let tagButton = event.relatedTarget;
    let tagId = tagButton.dataset.tagId;
    let tagName = tagButton.dataset.tagName;

    editTagForm.action = `tags/${tagId}`;
    editTagForm.name.value = tagName;
});

document.getElementById('deleteTagModal').addEventListener('show.bs.modal',(event) => {
    let deleteButton = event.relatedTarget;
    let tagId = deleteButton.dataset.tagId;
    let tagName = deleteButton.dataset.tagName;

    deleteTagForm.action = `tags/${tagId}`;
    deleteMessage.textContent = `「${tagName}」を削除してもよろしいですか？`
});
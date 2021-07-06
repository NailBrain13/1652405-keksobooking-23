const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const AVATAR_DEF = 'img/muffin-grey.svg';
const fileChooser = document.querySelector('.ad-form__field input[type=file]');
const preview = document.querySelector('.ad-form-header__preview img');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      preview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});

const resetAvatar = () => {
  preview.src = AVATAR_DEF;
};

export { resetAvatar };

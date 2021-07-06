const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const AVATAR_DEF = 'img/muffin-grey.svg';
const IMG_SIZE = '70';
const fileChooser = document.querySelector('.ad-form__field input[type=file]');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const previevContainer = document.querySelector('.ad-form__photo-container');
const previevPhoto = document.querySelector('.ad-form__photo');
const previevUpload = document.querySelector(
  '.ad-form__upload input[type=file]',
);

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      previewAvatar.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});

const addImg = (result) => {
  const div = previevPhoto;
  const img = previewAvatar.cloneNode(true);
  img.src = result;
  img.width = IMG_SIZE;
  img.height = IMG_SIZE;
  div.appendChild(img);
  previevContainer.appendChild(div);
};

const clearImages = () => {
  Array.from(previevPhoto.children).forEach((img) => {
    img.remove();
  });
};

previevUpload.addEventListener('change', () => {
  const file = previevUpload.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      addImg(reader.result);
    });

    reader.readAsDataURL(file);
  }
});

const resetAvatar = () => {
  previewAvatar.src = AVATAR_DEF;
  clearImages();
};

export { resetAvatar };

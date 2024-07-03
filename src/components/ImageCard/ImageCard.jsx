import css from "./ImageCard.module.css";

export default function ImageCard({ url, alt, onClick }) {
  return (
    <div className={css.galleryItem} onClick={onClick}>
      <img src={url} alt={alt} className={css.image} />
    </div>
  );
}

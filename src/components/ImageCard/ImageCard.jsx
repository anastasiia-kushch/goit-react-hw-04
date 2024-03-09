import css from '../ImageCard/ImageCard.module.css'

export default function ImageCard({ src, alt, onClick }) {
  return (
    <div>
      <img className={css.img}
          src={src}
          alt={alt} onClick={onClick}
        />
    </div>
  );
}

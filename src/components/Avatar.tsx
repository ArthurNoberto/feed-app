import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({hasBorder = true, src, alt, title }: AvatarProps) {
    return (
        <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}
        alt={alt}
        title={title}
        />
    );
}
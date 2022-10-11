import classNames from 'classnames/bind'
import styles from './Cities.module.css'

const cx = classNames.bind(styles)

export default function Cities({ name, posts }) {
  return (
    <div className={cx('root')}>
      <div className={cx('img-container')}>
        <img src={`/media/icons/${name.replace(/\s/g, '')}.svg`} alt='Service logo' />
      </div>
      <h4>{name}</h4>
      <div className={cx('cities')}>
        {posts.nodes.map(item => {
          if (item.categories.nodes.find(el => el.name.toLowerCase() === name.toLowerCase())) {
            return <a href={item.slug}>{item.title}</a>
          }
        })}
      </div>
    </div>
  )
}

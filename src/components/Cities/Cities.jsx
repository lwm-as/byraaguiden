import classNames from 'classnames/bind'
import styles from './Cities.module.css'

const cx = classNames.bind(styles)

export default function Cities({ name, posts }) {
  console.log(name)
  return (
    <div className={cx('root')}>
      <div className={cx('img-container')}>
        <img
          src={
            name === 'Digital markedsføring'
              ? 'https://wp.xn--byrguiden-72a.no/wp-content/uploads/2022/10/digitalmarkedsforing.svg'
              : name === 'Regnskapsfører'
              ? 'https://wp.xn--byrguiden-72a.no/wp-content/uploads/2022/10/regnskapsforer.svg'
              : `https://wp.xn--byrguiden-72a.no/wp-content/uploads/2022/10/${name
                  .toLowerCase()
                  .replace(/\s/g, '')}.svg`
          }
          alt='Service logo'
        />
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

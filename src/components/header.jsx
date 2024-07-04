import headerStyles from '@/styles/header.module.css'

const Header = () => {
    return(
        <div>
            <h1 className={headerStyles.title}>
                <span>Arsenal</span>News
            </h1>
            <p className={headerStyles.description}>
                keep up to date with the latest Arsenal news
            </p>
        </div>
    )
}

export default Header
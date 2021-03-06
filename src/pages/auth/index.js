import Login from 'src/common/components/Login';
import Register from 'src/common/components/Register';
import styles from '../../common/styles/Auth.module.css';
import PageTitle from 'src/common/components/PageTitle';
import Header from 'src/common/components/header';
import Footer from 'src/common/components/footer';
import Routing from 'src/common/components/Routing';

export default function auth() {
  return (
    <>
      <Header />
      <Routing type='public' />
      <PageTitle
        title='My Account'
        subTitle='Register and log in with your account to be able to shop at will'
      />
      <section className={styles.authWrapper}>
        <div className='row'>
          <div className='col-10 col-sm-10 col-md-6 col-lg-6'>
            <Login />
          </div>
          <div className='col-10 col-sm-10 col-md-6 col-lg-6'>
            <Register />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

import { Link } from 'umi';
import { Header, Footer } from '@/components';

function UnPage() {
  return (
    <>
      <Header/>
      <h1>404</h1>
      <p>Hi,you're here,We don't have a 'about' page in this project.</p>
      <p>
        That's it. When you visit a non-existent page in a contractual project,
        you will arrive here.
      </p>
      <p>
        If you don't need this feature, you can turn it off by configuring it.
      </p>
      <p>config/config.t|js or .umirc.t|js</p>
      <code>{`export default { 404: false };`}</code>
      <br />
      <br />
      <Link to="/">Go Back!</Link>
      <Footer/>
    </>
  );
}

export default UnPage;

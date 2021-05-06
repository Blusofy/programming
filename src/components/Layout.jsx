import { Container } from '@material-ui/core';
import { ProgressBar } from 'scrolling-based-progressbar';
import Footer from './Footer/Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';

function Layout({ children }) {
    return (
        <>
            <ProgressBar height="2px" color="#f50057" />

            <Header />
            <main>
                <Container>{children}</Container>
            </main>
            <Footer />
            <ScrollToTop />
        </>
    );
}
export default Layout;

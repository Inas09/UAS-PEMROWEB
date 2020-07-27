import Layout from '../components/MyLayout';
import Link from 'next/link';

const Index = props => (
    <Layout>
        <h1>Teknik Informatika SM4.1</h1>
        <h2>Daftar Mata Kuliah</h2>
        <ul>
            <li><Link href="/pemrogramanweb">Pemrograman Web</Link></li>
            <li><Link href="/datamining">Data Mining</Link></li>
            <li><Link href="/rpl">Rekayasa Perangkat Lunak</Link></li>
            <li><Link href="/DAA">Desain Analisis Algoritma</Link></li> 
            <li><Link href="/bindo">Bahasa Indonesia</Link></li>               
        </ul>
    </Layout>
);

export default Index;
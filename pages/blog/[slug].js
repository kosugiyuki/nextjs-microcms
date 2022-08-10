export default function Test(props) {
  // console.log("slug.js:", props);
  return <h1>BLOG記事ページ</h1>
}

// export async function getServerSideProps(context) {
//   console.log('params:', context.params);
//   return {
//     props: {message: 'Dynamic Routes'}
//   }
// }

export async function getStaticPaths() {
  return {
    paths: [
      {params: {slug: 'music'}},{params: {slug: 'schedule'}},{params: {slug: 'aaa'}}
    ],
    fallback: false,
  }
}

export async function getStaticProps(context) {
  console.log('posts:', context.params);
  return {
    props: {message: 'Dynamic Routes'}
  }
}

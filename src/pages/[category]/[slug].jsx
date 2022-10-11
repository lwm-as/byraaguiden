// import { ContentsMenuStateProvider } from '../../context/ContentsMenuContext'
//
// import styles from 'styles/pages/BlogArticle.module.css'
//
// const BlogArticle = ({ data }) => {
//   const {
//     post: { title, modifiedGmt, excerpt, featuredImage, content, seo, categories },
//     category,
//     category: { posts },
//     headerMenu,
//     footerMenu
//   } = data
//
//   return (
//     <Layout menus={{ headerMenu, footerMenu }} seo={seo} categories={categories}>
//       {/*<Container size='medium'>*/}
//       {/*    <Breadcrumb title={title} category={category} size={size} />*/}
//       {/*    <Container className={styles.container} size='medium'>*/}
//       {/*        <ContentsMenuStateProvider>*/}
//       {/*            <div className={styles.contentContainer}>*/}
//       {/*                <ArticleHero title={title} mod={modifiedGmt} excerpt={excerpt} featuredImage={featuredImage} />*/}
//       {/*                <Wysiwyg isContentsMenu={true}>{content}</Wysiwyg>*/}
//       {/*            </div>*/}
//       {/*            <ContentsMenu className={styles.sidebarRight} />*/}
//       {/*        </ContentsMenuStateProvider>*/}
//       {/*    </Container>*/}
//       {/*    <FeaturedArticles posts={posts}>Flere nyttige tips</FeaturedArticles>*/}
//       {/*</Container>*/}
//     </Layout>
//   )
// }
//
// export async function getStaticPaths() {
//   const { posts } = await graphql(GET_POST_SLUGS)
//
//   const paths = posts.nodes.map(node => `/${node.categories.nodes[1].slug}/${node.slug}`)
//
//   return {
//     paths,
//     fallback: 'blocking'
//   }
// }
//
// export async function getStaticProps({ params }) {
//   const variables = {
//     id: params.slug,
//     catId: encodeURIComponent(params.category)
//   }
//   const data = await graphql(GET_POST, variables)
//
//   return {
//     props: {
//       data
//     },
//     revalidate: 1
//   }
// }
//
// export default BlogArticle

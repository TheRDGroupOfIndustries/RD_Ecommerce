import BlogArchive from "./BlogArchive";
import BlogAuthor from "./BlogAuthor";
import BlogCategory from "./BlogCategory";
import BlogDark2Col from "./BlogDark2Col";
import BlogDark2ColSidebar from "./BlogDark2ColSidebar";
import BlogDark3Col from "./BlogDark3Col";
import BlogDarkHalfImage from "./BlogDarkHalfImage";
import BlogGridBothSidebar from "./BlogGridBothSidebar";
import BlogGridLeftSidebar from "./BlogGridLeftSidebar";
import BlogGridNoSidebar from "./BlogGridNoSidebar";
import BlogGridRightSidebar from "./BlogGridRightSidebar";
import BlogGridWideSidebar from "./BlogGridWideSidebar";
import BlogLayout from "./BlogLayout";
import BlogLight2Col from "./BlogLight2Col";
import BlogLight2ColSidebar from "./BlogLight2ColSidebar";
import BlogLightExclusive from "./BlogLightExclusive";
import BlogLightHalfImage from "./BlogLightHalfImage";
import BlogListBothSidebar from "./BlogListBothSidebar";
import BlogListLeftSidebar from "./BlogListLeftSidebar";
import BlogListNoSidebar from "./BlogListNoSidebar";
import BlogListRightSidebar from "./BlogListRightSidebar";
import BlogTag from "./BlogTag";

export {
  BlogLayout,
  BlogDark2Col,
  BlogDark2ColSidebar,
  BlogDark3Col,
  BlogDarkHalfImage,
  BlogListNoSidebar,
  BlogListLeftSidebar,
  BlogListRightSidebar,
  BlogListBothSidebar,
  BlogArchive,
  BlogAuthor,
  BlogCategory,
  BlogTag,
  BlogLight2Col,
  BlogLight2ColSidebar,
  BlogLightHalfImage,
  BlogLightExclusive,
  BlogGridNoSidebar,
  BlogGridLeftSidebar,
  BlogGridRightSidebar,
  BlogGridBothSidebar,
  BlogGridWideSidebar,
};
export const blogRoutes = [
  {
    path: "blog-dark-2-colomn",
    element: (
      <BlogLayout>
        <BlogDark2Col />
      </BlogLayout>
    ),
  },
  {
    path: "blog-dark-2-colomn-sidebar",
    element: (
      <BlogLayout>
        <BlogDark2ColSidebar />
      </BlogLayout>
    ),
  },
  {
    path: "blog-dark-3-colomn",
    element: (
      <BlogLayout>
        <BlogDark3Col />
      </BlogLayout>
    ),
  },
  {
    path: "blog-dark-half-image",
    element: (
      <BlogLayout>
        <BlogDarkHalfImage />
      </BlogLayout>
    ),
  },
  {
    path: "blog-list-no-sidebar",
    element: (
      <BlogLayout>
        <BlogListNoSidebar />
      </BlogLayout>
    ),
  },
  {
    path: "blog-list-left-sidebar",
    element: (
      <BlogLayout>
        <BlogListLeftSidebar />
      </BlogLayout>
    ),
  },
  {
    path: "blog-list-right-sidebar",
    element: (
      <BlogLayout>
        <BlogListRightSidebar />
      </BlogLayout>
    ),
  },
  {
    path: "blog-list-both-sidebar",
    element: (
      <BlogLayout>
        <BlogListBothSidebar />
      </BlogLayout>
    ),
  },
  {
    path: "blog-archive",
    element: (
      <BlogLayout>
        <BlogArchive />
      </BlogLayout>
    ),
  },
  {
    path: "blog-author",
    element: (
      <BlogLayout>
        <BlogAuthor />
      </BlogLayout>
    ),
  },
  {
    path: "blog-category",
    element: (
      <BlogLayout>
        <BlogCategory />
      </BlogLayout>
    ),
  },
  {
    path: "blog-tag",
    element: (
      <BlogLayout>
        <BlogTag />
      </BlogLayout>
    ),
  },
  {
    path: "blog-light-2-colomn",
    element: (
      <BlogLayout>
        <BlogLight2Col />
      </BlogLayout>
    ),
  },
  {
    path: "blog-light-2-colomn-sidebar",
    element: (
      <BlogLayout>
        <BlogLight2ColSidebar />
      </BlogLayout>
    ),
  },
  {
    path: "blog-light-half-image",
    element: (
      <BlogLayout>
        <BlogLightHalfImage />
      </BlogLayout>
    ),
  },
  {
    path: "blog-light-exclusive",
    element: (
      <BlogLayout>
        <BlogLightExclusive />
      </BlogLayout>
    ),
  },
  {
    path: "blog-grid-no-sidebar",
    element: (
      <BlogLayout>
        <BlogGridNoSidebar />
      </BlogLayout>
    ),
  },
  {
    path: "blog-grid-left-sidebar",
    element: (
      <BlogLayout>
        <BlogGridLeftSidebar />
      </BlogLayout>
    ),
  },
  {
    path: "blog-grid-right-sidebar",
    element: (
      <BlogLayout>
        <BlogGridRightSidebar />
      </BlogLayout>
    ),
  },
  {
    path: "blog-grid-both-sidebar",
    element: (
      <BlogLayout>
        <BlogGridBothSidebar />
      </BlogLayout>
    ),
  },
  {
    path: "blog-grid-wide-sidebar",
    element: (
      <BlogLayout>
        <BlogGridWideSidebar />
      </BlogLayout>
    ),
  },
];

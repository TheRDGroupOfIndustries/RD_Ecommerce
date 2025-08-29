import { client } from "../conf/sanity"

export async function getPosts() {
    const query = `*[_type == "blog"]{
  title,
  date,
  tag,
  slug,
  coverImage{asset->{url}},
  content[]{
    ...,
    _type == "image" => {
      asset->{url, metadata { dimensions }}
    }
  }
}`;

  const posts = await client.fetch(query)
  return posts
}

export async function getPost(slug) {
    const query = `*[_type == "blog" && slug.current == $slug][0]{
  title,
  date,
  tag,
  slug,
  coverImage{asset->{url}},
  content[]{
    ...,
    _type == "image" => {
      asset->{url, metadata { dimensions }}
    }
  }
}`;

  const post = await client.fetch(query, { slug })
  return post
}
export type User = {
  id: number;
  name: string;
  email: string;
};

type Post = {
  id: number;
  title: string;
  content: string;
  authorId: number;
};

export const data = {
  users: [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ] as User[],
  posts: [
    {
      id: 1,
      title: "First Post",
      content: "This is the first post",
    },
    {
      id: 2,
      title: "Second Post",
      content: "This is the second post",
    },
  ] as Post[],
  getUsers: async (): Promise<User[]> => data.users,
  getUserById: async (id: number): Promise<User | undefined> =>
    data.users.find((user) => user.id === id),
  getPosts: (): Post[] => data.posts,
  getPostById: (id: number): Post | undefined =>
    data.posts.find((post) => post.id === id),
  createUser: (user: Omit<User, "id">): User => {
    const newUser: User = { ...user, id: data.users.length + 1 };
    data.users.push(newUser);
    return newUser;
  },
  createPost: (post: Omit<Post, "id">): Post => {
    const newPost: Post = { ...post, id: data.posts.length + 1 };
    data.posts.push(newPost);
    return newPost;
  },
  updateUser: async (
    id: number,
    updates: Partial<User>
  ): Promise<User | null> => {
    const index = data.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      data.users[index] = { ...data.users[index], ...updates };
      return data.users[index];
    }
    return null;
  },
  updatePost: (id: number, updates: Partial<Post>): Post | null => {
    const index = data.posts.findIndex((post) => post.id === id);
    if (index !== -1) {
      data.posts[index] = { ...data.posts[index], ...updates };
      return data.posts[index];
    }
    return null;
  },
  deleteUser: (id: number): boolean => {
    const index = data.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      data.users.splice(index, 1);
      return true;
    }
    return false;
  },
  deletePost: (id: number): boolean => {
    const index = data.posts.findIndex((post) => post.id === id);
    if (index !== -1) {
      data.posts.splice(index, 1);
      return true;
    }
    return false;
  },
};

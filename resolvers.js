const data = {
  authors: [
    {
      id: 1,
      name: "abc",
      booksId: [1, 2],
    },
    {
      id: 2,
      name: "xyz",
      booksId: [3],
    },
  ],
  books: [
    {
      id: 1,
      title: "book1",
      publishedYear: "2203",
      authorId: 1,
    },
    {
      id: 2,
      title: "boook2",
      publishedYear: "2244",
      authorId: 1,
    },
    {
      id: 3,
      title: "book3",
      publishedYear: "1009",
      authorId: 2,
    },
  ],
};

export const resolvers = {
  Book: {
    author: (parent, args, context, info) => {
      const author = data.authors.find(
        (author) => author.id === parent.authorId
      );
      return author;
    },
  },
  Author: {
    books: (parent, args, context, info) => {
      const books = data.books.filter((book) =>
        parent.booksId.includes(book.id)
      );
      return books;
    },
  },
  Query: {
    authors: (parent, args, context, info) => {
      return data.authors;
    },
    books: (parent, args, context, info) => {
      return data.books;
    },
  },
  Mutation: {
    addBook: (parent, args, context, info) => {
      const newBook = {
        ...args,
        id: data.books.length + 1,
      };
      data.books.push(newBook);
      return newBook;
    },
  },
};

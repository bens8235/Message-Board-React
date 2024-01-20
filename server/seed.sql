CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR (255) NOT NULL
);

CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR (255) NOT NULL
);

CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR (255) NOT NULL,
  content TEXT NOT NULL,
  users_id INTEGER REFERENCES users(id),
  categories_id INTEGER References categories(id)
);

CREATE TABLE IF NOT EXISTS tags (
    id SERIAL PRIMARY KEY, 
    name VARCHAR (255) NOT NULL,
    posts_id INTEGER REFERENCES posts(id)
);

INSERT INTO users(name) VALUES('Ben');
INSERT INTO users(name) VALUES('Dan');
INSERT INTO users(name) VALUES('Edd');

INSERT INTO categories(name) VALUES('Gaming');
INSERT INTO categories(name) VALUES('Sport');
INSERT INTO categories(name) VALUES('Television');

INSERT INTO posts(title,content,users_id, categories_id) VALUES('Football', 'My name is Ben & I like football', 1, 2);
INSERT INTO posts(title,content,users_id, categories_id) VALUES('Gaming', 'My name is Dan & I like gaming', 2, 1);
INSERT INTO posts(title,content,users_id, categories_id) VALUES('Television', 'My name is Edd & I like television', 3, 3);

INSERT INTO tags(name, posts_id) VALUES('fun', 1);
INSERT INTO tags(name, posts_id) VALUES('groovy', 2);
INSERT INTO tags(name, posts_id) VALUES('cool', 3);

SELECT users.name, posts.title, categories.name AS category, posts.content, tags.name AS tags
FROM users 
JOIN posts ON posts.users_id = users.id
JOIN categories ON posts.categories_id = categories.id
JOIN tags on tags.posts_id = posts.id

-- JOIN tags on tags.posts_id = posts.id
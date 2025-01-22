# Reddit Stories Generator

## Project Description

Reddit Stories Generator is a project that consists of two main components:

1. **Reddit Scrapper**: A Python-based backend that fetches posts from Reddit using the Reddit API.
2. **Project Interface**: A Next.js-based frontend that displays the fetched Reddit posts in a user-friendly interface.

## Setup Instructions

### Prerequisites

- Node.js and npm
- Python 3.x
- Virtualenv (optional but recommended)

### Setting Up the Project Interface (Next.js)

1. Navigate to the `Project Interface` directory:

```sh
cd Project Interface
```

2. Install the dependencies:

```sh
npm install
```

3. Create a .env file in the Project Interface directory and add your environment variables:

```sh
touch .env
```

4. Start the development server:

```sh
npm run dev
```

## Setting Up the Reddit Scrapper (Python)

1. Create a virtual environment (optional but recommended):

```sh
python -m venv venv
```

2. Activate the virtual environment:

- On Windows:

```sh
  venv\Scripts\activate
```

- On macOS/Linux:

```sh
  source venv/bin/activate
```

3. Install the dependencies:

```sh
pip install -r requirements.txt
```

4. Create a .env file in the root directory and add your environment variables:

```sh
touch .env
```

5.Run the Reddit Scrapper:

```sh
python src/main.py
```

## Usage

- Start the Reddit Scrapper to fetch posts from Reddit.
- Start the Project Interface to display the fetched posts.
- Open your browser and navigate to http://localhost:3000 to view the posts.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature-name).
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature/your-feature-name).
- Create a new Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- Reddit API
- Next.js
- Python

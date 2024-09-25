# These are the specific tools for taking care of linting, testing and building in the ecosystem of Python:

## Linting
Linting process checks the language syntax and style problem in my Python source code. In this way, after running a linter, I can see and correct minor programming errors. Moreover, lint migh warn me about some unconventional coding practices which might lead to some bugs. Linting can spot declared but not used variables, undefinded functions, missing commas, parenthesses, etc. There are 2 common options for linting: pylint and mypy.

## Testing
There are 2 types of tests:
1. Integration test - checks that components in a software operate with each other
2. Unit test - testing where units or components of a software are tested in isolation from the rest of the system.

Python tests are Python classes that reside in separate files from the code being tested. 

Types of Python Unit testing
Each test framework specifies the structure and naming of tests and test files.
- Unittest
- Pytest
- Nose or nose2
- Doctest

Types of Python integration testing
- calling HTTP REST API
- calling a Python API
- calling a web service
- running a command line

## Building
Python build tools simplify the packaging and deployment of software. They help in packaging software into deployable format, making it easier to distribute to end-users.

Some of the Python Build Tools
- PyBuilder
- Poetry
- SCons
- Setuptools

# CI Set Up 
a. Alternative to GitHub Actions (cloud-based solution):
- GitLab
- Buildkite
b. Alternative to Jenkins (self-hosted setups):
- CircleCI
- TeamCity
- Buildkite


It is recommended to use cloud-based solution for smaller project where there any any special requirements. For bigger project with special requirements and if your needs should be tailored, it is recommended to use self-hosted solution.
For our small project consisting of 6 developers, I would opt for cloud-based solution due to its simplicity.

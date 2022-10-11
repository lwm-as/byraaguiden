# Useguide

## Git branching

### Use of the development-branch

1. Run the command `git checkout master`- Switches to the _master_-branch, if you are not already in it.

2. Run the command `git pull`- Fetches the latest updates on the _master_-branch.

3. Run the command `git checkout -b development`- Creates a new branch with the name “development” and switches to this branch.

4. Run the command `git pull origin master`- This brings the latest version of the _master_-branch into your _development_-branch. Although point 2 also does this, it is good practice to do this as well.

5. Develop in _feature_-branches, and merge all _feature_-branches into this branch

6. Run the command `git pull origin master` - This brings the latest version of the _master_-branch into your _development_-branch. This is done because we want to deal with potential merge-conflicts locally. - This command MUST be run before you merge your _development_-branch into the _master_-branch, but it can be run during the development for a more incremental handling of various tasks.

7. Start a Pull-request on GitHub for your _development_-branch into the _master_-branch.

### Use of the Feature-branches

1. Run the command `git checkout development`- Switches to the _development_-branch, if you are not already in it.

2. Run the command `git pull` - Fetches the latest updates on the _development_-branch.

3. Run the command `git checkout -b feature/[FEATURE NAME]` - Creates a new branch with the name “feature/[FEATURE NAME]” and switches to this branch.

4. Run the command `git pull origin development` - This brings the latest version of the _development_-branch into your _feature_-branch. Although point 2 also does this, it is good practice to do this as well.

5. Perform the development of the Feature you are working on. Commit often with good Commit Messages.

6. Run the command `git pull origin development`- This brings the latest version of the _development_-branch into your _feature_-branch. This is done because we want to deal with potential merge-conflicts locally. - This command MUST be run before you merge your _feature_-branch into the _development_-branch, but it can be run during the development for a more incremental handling of various tasks.

7. Start a Pull-request on GitHub for your _feature_-branch into the _development_-branch.

8. When everything is complete run the command `git branch -d feature/[FEATURE NAME]` - Deletes the _feature_-branch you are done with locally

9. Go to GitHub and delete the origin feature branch. Click the branch name -> View all -> Delete feature/[FEATURE NAME]

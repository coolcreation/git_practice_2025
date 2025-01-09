npm install    
npm test  ( to start the test )

**Configure Git Identity** to ensure commits are properly attributed to you.
```js
// set your global username and email:
git config --global user.name "Your Full Name"
git config --global user.email "your-email@example.com"

// Check if your details are correctly saved:
git config --list 

// should see something like this in the output:
user.name=Your Full Name
user.email=your-email@example.com
```

**Local vs. Global Configurations**
- The `--global` flag applies these settings to all repositories on your system.
- If you want to set a different identity for a specific project, navigate to that project folder and use:
```js
git config user.name "Project Specific Name"
git config user.email "project-specific-email@example.com"

//Verify local settings:
git config --list --local
```
**Change configuration For Multiple line commit**, through VS Code, NOT Vim:
  ```js
  git config --list
 // Then change core editor:
  git config --global core.editor 'code --wait'
  // Now we can just do this
  git commit
  // Terminal will pop open VS Code so we don't have to work with VIM
  // Now we can just type a multiple line message, then click the checkmark and submit
  
  ```


To make a new branch  ( make sure there are some kind of file change )
```md
git add .
git checkout -b my-new-branch
git commit -am 'initial workflow for testing'
git status
git push origin my-new-branch
```
If the new branch test passes then it can be merged.
Otherwise, the person reviewing the code can add a note on what needs to be fixed.
After fixing the code, do this and resubmit:

```md
git commit -am 'fixing broken code'
git push origin my-new-branch
```

If trying to use the same branch name as one that has been deleted on github
we can try these first, and if it's not updating we can reload vs code by going
to the command palette and selecting "Reload Window."

```md
git checkout main   ( switch to a different branch to delete current branch )
git fetch --prune
git branch -d my-second-branch   ( delete )
git branch -D my-second-branch   ( force delete - if delete doesn't work )
``` 
# installation

## required
- Xcode can be installed from the App Store.

## mac
```shell
# step1
brew install deno

# Or step1
curl -fsSL https://deno.land/x/install/install.sh | sh

# 2. add env
export DENO_INSTALL="/root/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"

# 3. check
deno --version
```


## resources
- https://deno.land/
- https://stackoverflow.com/questions/61851774/how-to-install-deno-on-ubuntu

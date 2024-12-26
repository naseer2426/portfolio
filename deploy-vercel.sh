#!/bin/sh

# Install deno
curl -fsSL https://deno.land/x/install/install.sh | sh

# Deno Build
/vercel/.deno/bin/deno run build

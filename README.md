## Example

```typescript
/* src/env.ts */
export env = ensureCreate(
    "DB_HOST",
    "DB_USER",
    "DB_PASS",
)
```
If you don't get it, here's the explanation:

This `ensureCreate` method returns an object with environment variables, checks if they have been set. If not, then an exception will protect you and tell you which one you missed. <3

```typescript
/* src/db.ts */
import { env } from "./env"

const dbHost = env.DB_HOST
const dbUser = env.DB_USER
const dbPass = env.DB_PASS
```

```properties
# .env.example
DB_HOST=localhost
DB_USER=myuser
DB_PASS=mypassword
```

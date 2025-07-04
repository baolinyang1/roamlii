# Docker Setup for Roamlii

This project includes Docker configuration for both development and production environments.

## 🚀 Quick Start

### Development Mode
```bash
# Build and run development environment
docker-compose --profile dev up --build

# Or run in detached mode
docker-compose --profile dev up -d --build

# View logs
docker-compose --profile dev logs -f
```

### Production Mode
```bash
# Build and run production environment
docker-compose --profile prod up --build

# Or run in detached mode
docker-compose --profile prod up -d --build
```

## 📁 Docker Files

- `Dockerfile` - Multi-stage production build
- `Dockerfile.dev` - Development environment
- `docker-compose.yml` - Service orchestration
- `.dockerignore` - Excludes unnecessary files

## 🛠️ Manual Docker Commands

### Development
```bash
# Build development image
docker build -f Dockerfile.dev -t roamlii:dev .

# Run development container
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules roamlii:dev
```

### Production
```bash
# Build production image
docker build -t roamlii:prod .

# Run production container
docker run -p 3000:3000 roamlii:prod
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific variables:
```env
NEXT_PUBLIC_API_URL=your_api_url
DATABASE_URL=your_database_url
```

### Ports
- **Development**: http://localhost:3000
- **Production**: http://localhost:3000

## 📦 What's Included

### Development Features
- ✅ Hot reloading
- ✅ Volume mounting for live code changes
- ✅ Dev dependencies included
- ✅ Source maps enabled

### Production Features
- ✅ Multi-stage build for minimal image size
- ✅ Standalone output for optimal performance
- ✅ Non-root user for security
- ✅ Optimized dependencies (production only)

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
docker run -p 3001:3000 roamlii:dev
```

**Permission errors:**
```bash
# Fix permissions (if needed)
sudo chown -R $USER:$USER .
```

**Build failures:**
```bash
# Clean up Docker system
docker system prune -a

# Rebuild without cache
docker-compose build --no-cache
```

## 📊 Image Sizes

The production build uses multi-stage builds to minimize image size:
- Base Alpine Linux (~5MB)
- Node.js runtime (~40MB)
- Application code (~optimized)

## 🔄 CI/CD Integration

These Docker files are ready for CI/CD pipelines:

```yaml
# Example GitHub Actions
- name: Build Docker image
  run: docker build -t roamlii:${{ github.sha }} .

- name: Run tests in Docker
  run: docker run --rm roamlii:${{ github.sha }} npm test
```

## 📈 Performance Tips

1. **Layer Caching**: Dependencies are installed before copying source code
2. **Standalone Output**: Next.js standalone mode for smaller runtime
3. **Alpine Base**: Minimal Linux distribution
4. **Multi-stage Build**: Separates build and runtime environments 
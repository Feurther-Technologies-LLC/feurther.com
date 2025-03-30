# Feurther.com GitHub Pages Deployment Guide

This README provides instructions for deploying the Feurther.com website to GitHub Pages.

## English Instructions

### Prerequisites

- GitHub repository access with write permissions
- Git installed locally
- Node.js and npm installed

### Deployment Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/Feurther-Technologies-LLC/feurther.com.git
   cd feurther.com
   ```

2. **Install dependencies**

   ```bash
   cd fitopia
   npm install
   ```

3. **Verify the GitHub workflow file**
   Ensure `.github/workflows/deploy.yml` exists and contains the correct configuration. The file should include:

   - Setup Node.js
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages

4. **Configure GitHub Pages in repository settings**

   - Go to your GitHub repository
   - Click on "Settings"
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "GitHub Actions"

5. **Make changes and push to the repository**

   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

6. **Monitor deployment**

   - Go to the "Actions" tab in your GitHub repository
   - You'll see the workflow running
   - Once completed successfully, your site will be deployed

7. **Access your website**
   Your website will be available at: `https://feurther-technologies-llc.github.io/feurther.com/`

### Custom Domain (Optional)

To use a custom domain:

1. Go to repository Settings → Pages
2. In the "Custom domain" section, enter your domain name
3. Follow GitHub's instructions to set up DNS records for your domain

### Troubleshooting

#### Build Errors

If you encounter TypeScript errors like:

```
Error: src/components/Hero.tsx(4,1): error TS6133: 'appStoreWhiteBadge' is declared but its value is never read.
```

Fix the issue by removing unused imports or addressing other TypeScript errors, then commit and push again.

#### Path Issues

Ensure all directory paths in `.github/workflows/deploy.yml` match the actual repository structure. Case sensitivity matters.

---

## 中文说明

### 前提条件

- 拥有 GitHub 仓库的写入权限
- 本地安装 Git
- 安装 Node.js 和 npm

### 部署步骤

1. **克隆仓库**

   ```bash
   git clone https://github.com/Feurther-Technologies-LLC/feurther.com.git
   cd feurther.com
   ```

2. **安装依赖**

   ```bash
   cd fitopia
   npm install
   ```

3. **检查 GitHub 工作流文件**
   确保`.github/workflows/deploy.yml`文件存在并包含正确的配置。文件应包括：

   - 设置 Node.js
   - 安装依赖
   - 构建项目
   - 部署到 GitHub Pages

4. **在仓库设置中配置 GitHub Pages**

   - 前往 GitHub 仓库
   - 点击"Settings"（设置）
   - 在侧边栏导航到"Pages"
   - 在"Source"（源）下，选择"GitHub Actions"

5. **进行更改并推送到仓库**

   ```bash
   git add .
   git commit -m "你的提交信息"
   git push
   ```

6. **监控部署**

   - 转到 GitHub 仓库的"Actions"标签
   - 你将看到工作流运行
   - 成功完成后，你的网站将被部署

7. **访问你的网站**
   你的网站将在以下地址可用：`https://feurther-technologies-llc.github.io/feurther.com/`

### 自定义域名（可选）

要使用自定义域名：

1. 转到仓库 Settings → Pages
2. 在"Custom domain"（自定义域名）部分，输入你的域名
3. 按照 GitHub 的说明设置域名的 DNS 记录

### 故障排除

#### 构建错误

如果遇到 TypeScript 错误，如：

```
Error: src/components/Hero.tsx(4,1): error TS6133: 'appStoreWhiteBadge' is declared but its value is never read.
```

通过删除未使用的导入或解决其他 TypeScript 错误来修复问题，然后再次提交和推送。

#### 路径问题

确保`.github/workflows/deploy.yml`中的所有目录路径与实际仓库结构匹配。大小写敏感。

// Semua teks dan warna situs diatur di sini. Ubah nilainya saja, tidak perlu menyentuh komponen.

export const siteContent = {
  meta: {
    lang: 'en',
    title: 'Rayhan Kimi Nabiel Athallah | DevOps, Cloud & IoT Platform Engineer',
  },

  // SEO: dipindahkan dari rayhank.com_old (nuxt.config.ts dan data/siteContent.ts).
  // Judul halaman ada di meta.title di atas dan juga dipakai untuk og:title / twitter:title.
  seo: {
    siteUrl: 'https://rayhank.com',
    description:
      'Rayhan Kimi Nabiel Athallah: DevOps Engineer, Cloud Engineer, AWS Specialist, and SRE. Building scalable cloud infrastructure and IoT platforms from Bali, Indonesia.',
    keywords: [
      'rayhan kimi',
      'rayhan kimi nabiel athallah',
      'rayhan kimi portfolio',
      'devops engineer indonesia',
      'cloud engineer indonesia',
      'aws specialist indonesia',
      'sre indonesia',
      'iot platform engineer indonesia',
      'rayhan kimi devops',
      'rayhan kimi aws',
    ],
    author: 'Rayhan Kimi Nabiel Athallah',
    // Warna bilah browser di HP. Disamakan dengan warna latar situs (colors.charcoal).
    themeColor: '#1A1D1A',
    ogDescription:
      'Portfolio of Rayhan Kimi: DevOps Engineer, AWS Specialist, SRE, and IoT Platform Engineer. Explore cloud infrastructure projects and get in touch.',
    twitterDescription:
      'Official portfolio of Rayhan Kimi Nabiel Athallah: DevOps Engineer, Cloud Engineer, AWS Specialist, SRE, and IoT Platform Engineer.',
    twitterCreator: '@rayhankimi',
    // Gambar preview saat link dibagikan. Path relatif ke public/.
    ogImage: '/og.png',

    // Data terstruktur (schema.org Person) untuk mesin pencari.
    person: {
      name: 'Rayhan Kimi Nabiel Athallah',
      alternateName: ['Rayhan Kimi', 'Rayhan K'],
      jobTitle: 'DevOps & Cloud Engineer',
      worksFor: 'Rayhank Studio',
      email: 'r4yhankimi@gmail.com',
      sameAs: ['https://www.linkedin.com/in/rayhankimi/', 'https://github.com/rayhankimi'],
      knowsAbout: ['DevOps', 'Cloud Engineering', 'AWS', 'Site Reliability Engineering', 'IoT Platform Engineering'],
      description:
        'Rayhan Kimi Nabiel Athallah is an Indonesian DevOps and Cloud Engineer specializing in AWS, SRE practices, and IoT platform development.',
    },

    // Halaman yang masuk sitemap.xml (path relatif ke siteUrl).
    sitemap: ['/', '/cv4.pdf'],
  },

  // Warna dasar dari palette.png, ditambah satu warna terang ("paper") untuk teks dan potongan judul.
  // Pasangan yang sudah dicek kontras WCAG AA:
  //   sage di atas charcoal 7.2:1, ink di atas sage 8.1:1,
  //   paper di atas slate 7.0:1, paper di atas green 9.2:1, ink di atas paper 15.9:1,
  //   sage di atas green 4.66:1 (tipis di atas batas 4.5, hati-hati kalau mengganti salah satunya),
  //   sage di atas slate hanya 3.55:1: cukup untuk garis atau teks besar, jangan untuk teks biasa,
  //   paper di atas red 5.44:1 (tombol CV). Red langsung di atas charcoal hanya 2.6:1, jangan untuk teks.
  colors: {
    sage: '#8AB0AB',
    slate: '#3E505B',
    green: '#26413C',
    charcoal: '#1A1D1A',
    ink: '#03120E',
    paper: '#E4ECEA',
    // Di luar palette.png: khusus untuk tombol CV supaya menonjol.
    red: '#B3261E',
  },

  // Bagian kiri: judul (nama) dan teks introduksi.
  hero: {
    // Dua kata terakhir digabung jadi satu potongan dan turun ke baris baru.
    title: 'Rayhan Kimi Nabiel Athallah',
    intro:
      'DevOps Engineer, AWS Cloud Practitioner Certified. Excel at handling deployment both in cloud and on premise deployment. Prioritize security, scalability, availability, and cost efficiency. Currently working as Kubernetes Operation Technical Staff.',
    // File CV ada di public/cv4.pdf. Alamat pendek rayhank.com/cv juga diarahkan ke file ini (nuxt.config.ts).
    cvButton: {
      label: 'Download my CV',
      href: '/cv4.pdf',
      icon: 'mdi:file-download-outline',
    },
  },

  // Bagian kanan: daftar kontak, tampil seperti output perintah `tree`.
  // Tombol tampil sebagai [label](detail). Kalau detail kosong, yang tampil alamat dari href.
  // href yang masih kosong ('') tampil dengan bingkai putus-putus dan belum bisa diklik.
  // Nama ikon dari koleksi Material Design Icons: https://icon-sets.iconify.design/mdi/
  contact: {
    title: 'My Contact',
    links: [
      { label: 'LinkedIn', detail: 'rayhankimi', href: 'https://linkedin.com/in/rayhankimi', icon: 'mdi:linkedin' },
      { label: 'GitHub', detail: 'rayhankimi', href: 'https://github.com/rayhankimi', icon: 'mdi:github' },
      { label: 'Email', detail: 'r4yhankimi@gmail.com', href: 'mailto:r4yhankimi@gmail.com', icon: 'mdi:email-outline' },
      { label: 'Portfolio', detail: 'rayhank.com', href: 'https://rayhank.com', icon: 'mdi:web' },
    ],
  },

  // Section About Me: dua box di kiri (introduksi dan skills), satu box shell di kanan.
  about: {
    title: 'About Me',

    intro: {
      title: 'Rayhan Kimi',
      paragraphs: [
          'Graduated from Universitas Udayana as Bachelor of Electrical Engineering (Minoring in Robotics & Low Voltage system). Taught networking (cisco), IoT, edge deployment and was active in various organization and participating in many prototyping and hackathon competition during college.',
          'Currently working as Kubernetes Technical Operation Staff in SaaS Company. Excel in handling server both in cloud and on premise deployment. Proficient in troubleshooting related to networking, system, and Kubernetes.'
      ],
    },

    // Ikon logo dari Simple Icons (https://icon-sets.iconify.design/simple-icons/), awali dengan "simple-icons:".
    // Ikon umum dari Material Design Icons (https://icon-sets.iconify.design/mdi/), awali dengan "mdi:".
    // Dokploy belum ada di Simple Icons, jadi sementara memakai ikon server umum.
    skills: {
      title: 'Skills',
      items: [
        { label: 'Kubernetes (RKE2, K3S, EKS)', icon: 'simple-icons:kubernetes' },
        { label: 'AWS', icon: 'simple-icons:amazonwebservices' },
        { label: 'Docker', icon: 'simple-icons:docker' },
        { label: 'Linux', icon: 'simple-icons:linux' },
        { label: 'Python', icon: 'simple-icons:python' },
        { label: 'Actions', icon: 'simple-icons:githubactions' },
        { label: 'Terraform', icon: 'simple-icons:terraform' },
        { label: 'Grafana', icon: 'simple-icons:grafana' },
        { label: 'Prometheus', icon: 'simple-icons:prometheus' },
        { label: 'Proxmox', icon: 'simple-icons:proxmox' },
        { label: 'Dokploy', icon: 'mdi:server-network' },
      ],
    },

    // Shell ala fastfetch. Hanya kursor di baris terakhir yang beranimasi (berkedip).
    shell: {
      user: 'visitor',
      host: 'rayhank.com',
      command: 'fastfetch',
      groups: [
        {
          title: 'Info',
          rows: [
            { key: 'Name', value: 'Rayhan Kimi Nabiel Athallah, S.T' },
            { key: 'Role', value: 'DevOps Engineer' },
            { key: 'Degree', value: 'Bachelor of Electrical Eng.' },
          ],
        },
        {
          title: 'About',
          rows: [
            { key: 'Alma', value: 'Universitas Udayana' },
            { key: 'GPA', value: '3.77' },
            { key: 'Hobby', value: 'Coffee, Card Game.' },
            { key: 'Currently', value: 'Operation Technical Staff' },
          ],
        },
        {
          title: 'Uptime',
          rows: [
            { key: 'YoE', value: '1 Year' },
            { key: 'Age', value: '23 Years' },
          ],
        },
      ],
    },
  },

  // Footer: bagian atas berlatar polos, lalu warnanya perlahan memudar ke foto.
  // Foto ada di public/: footer.png (asli), footer-1280.webp dan footer-2560.webp (versi ringan yang dipakai).
  // Kalau foto diganti, buat ulang versi ringannya:
  //   magick public/footer.png -resize 1280x -strip -quality 72 public/footer-1280.webp
  //   magick public/footer.png -resize 2560x -strip -quality 72 public/footer-2560.webp
  footer: {
    title: 'Rayhan Kimi ',
    text: 'Everyone is born as a blank slate and anyone can become what they want to be and that the world has the potential to be improved upon. Specifically, human strives to understand and achieve their perfect self and world through education, prudence, and experience.',
    // Tampil sebagai "© <tahun> <owner>". Tahun diisi otomatis.
    owner: 'Rayhan Kimi Nabiel Athallah',
    // Lokasi foto, tampil di pojok kanan bawah berlawanan dengan nama.
    photoLocation: 'Kampus Teknik Elektro - 2024. Shot using Canon FX - Kodak Gold 200',
    // Tidak terlihat; dibacakan screen reader sebelum nama lokasi.
    photoLocationLabel: 'Photo location:',
  },
}

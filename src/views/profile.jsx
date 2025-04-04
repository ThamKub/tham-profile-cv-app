import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Divider,
  Grid,
  IconButton,
  useTheme,
} from "@mui/material";
import { GitHub, LinkedIn, Instagram, Twitter } from "@mui/icons-material";
import TextField from '@mui/material/TextField';
import profileImage from '../images/tham.jpg';
import aboutMeImage from '../images/aboutme.jpg';

function Profile() {
  const theme = useTheme();
  

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar
        position="static"
        sx={{ bgcolor: "black", borderBottom: "3px solid black" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            THAM SUBSANONG
          </Typography>
          <Box>
            <Button sx={{ color: "white", textTransform: "none" }}>Work</Button>
            <Button sx={{ color: "white", textTransform: "none" }}>
              About
            </Button>
            <Button sx={{ color: "white", textTransform: "none" }}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Grid
        container
        spacing={2}
        sx={{ width: "100%", alignItems: "center", py: 6 }}
      >
        <Grid item xs={12} md={6} sx={{ px: 15 }}>
          <Typography variant="h2" gutterBottom>
            HI, I AM <br />
            THAM SUBSANONG
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4, color: "text.secondary", fontSize: "1rem" }}
          >
            นักพัฒนาเว็บไซต์ฝั่งฟรอนต์เอนด์ที่มีความสนใจในการ <br />
            สร้างเว็บที่มีดีไซน์โดดเด่นและมีประสิทธิภาพ
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "50px",
              px: 3,
              py: 1,
              color: "black",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            CONTACT ME
          </Button>
          <IconButton aria-label="linkedin" sx={{ color: "white", ml: 2 }}>
            <LinkedIn />
          </IconButton>
          <IconButton aria-label="github" sx={{ color: "white", ml: 1 }}>
            <GitHub />
          </IconButton>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "80%",
              height: "80%",
              borderRadius: "20px",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={profileImage}
              alt="tham portrait"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
      </Grid>

      <Divider
        sx={{ bgcolor: "gray", my: 6, mt: 6, mb: 6, mx: "auto", width: "100%" }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          px: { xs: 2, md: 6 },
          py: 4,
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            ml: { xs: 0, md: 10 },
          }}
        >
          <Typography
            sx={{
              fontSize: "80px",
              fontWeight: "bold",
              color: "white",
              lineHeight: "1",
            }}
          >
            ABOUT ME
          </Typography>
        </Box>

        <Box sx={{ flex: 2, px: { xs: 2, md: 4 } }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "white",
              fontSize: "25px",
              textAlign: "justify",
              maxWidth: "950px",
            }}
          >
            ผมเป็นนักพัฒนาเว็บไซต์ฝั่งฟรอนต์เอนด์ที่ทำงานอยู่ในกรุงเทพฯ
            กำลังมองหาโอกาสที่น่าตื่นเต้นในการทำงาน
            มีพื้นฐานการศึกษาด้านวิศวกรรมซอฟต์แวร์
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "gray",
              mb: 4,
              textAlign: "justify",
              maxWidth: "950px",
            }}
          >
            ขอให้ความสำคัญกับการเข้าถึง (accessibility)
            เพื่อพัฒนาเว็บไซต์ให้ใช้งานได้ดีขึ้น
            มีความกระตือรือร้นและอยากเรียนรู้เทคโนโลยีใหม่ๆ ปัจจุบันกำลังศึกษา
            React.js และการออกแบบเว็บ เวลาว่างชอบเล่นเกม Genshin, Honkai, ZZZ,
            Wuwa, Roblox
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#C4E538",
                color: "black",
                borderRadius: "50px",
                px: 3,
                py: 1,
                fontWeight: "bold",
                textTransform: "uppercase",
                "&:hover": { bgcolor: "#A3CB38" },
              }}
            >
              DOWNLOAD RESUME
            </Button>
            <IconButton
              sx={{
                bgcolor: "#252525",
                color: "white",
                "&:hover": { bgcolor: "#333" },
              }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              sx={{
                bgcolor: "#252525",
                color: "white",
                "&:hover": { bgcolor: "#333" },
              }}
            >
              <GitHub />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
        <img
          src={aboutMeImage}
          alt="Profile Image"
          style={{
            width: "100%",
            maxWidth: "76%",
            borderRadius: "12px",
          }}
        />
      </Box>

      <Divider
        sx={{ bgcolor: "gray", my: 6, mt: 6, mb: 6, mx: "auto", width: "100%" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          px: { xs: 2, md: 10 },
          py: 4,
        }}
      >
        <Box
          sx={{
            flexBasis: "40%",
            flexGrow: 0,
            textAlign: { xs: "center", md: "left" },
            px: { xs: 0, md: 10 },
          }}
        >
          <Typography
            sx={{
              fontSize: "60px",
              fontWeight: "bold",
              color: "white",
              lineHeight: "1",
            }}
          >
            MY CAPABILITIES
          </Typography>
        </Box>

        <Box
          sx={{
            flexBasis: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "gray",
              textAlign: "left",
              maxWidth: "920px",
              fontSize: "25px",
            }}
          >
            ผมมองหาโอกาสในการเพิ่มทักษะใหม่ๆ อยู่เสมอ ทั้งการพัฒนาฟรอนท์เอนด์
            แบล็กเอนด์ การออกแบบ UX/UI ฐานข้อมูล
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              maxWidth: "920px",
              gap: 2,
              mt: 6,
              justifyContent: "flex-start",
            }}
          >
            {[
              "HTML",
              "CSS",
              "JAVASCRIPT",
              "FLUTTER",
              "DART",
              "IoT",
              "REACT",
              "DATABASE",
            ].map((skill) => (
              <Button
                key={skill}
                variant="outlined"
                sx={{
                  borderRadius: "50px",
                  px: 5,
                  py: 1,
                  maxWidth: "900px",
                  color: "white",
                  borderColor: "white",
                  fontSize: "24px",
                  textTransform: "uppercase",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                {skill}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>

      <Divider
        sx={{ bgcolor: "gray", my: 6, mt: 6, mb: 6, mx: "auto", width: "100%" }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          px: { xs: 2, md: 10 },
          py: 4,
        }}
      >
        <Box
          sx={{
            flexBasis: "40%",
            flexGrow: 0,
            textAlign: { xs: "center", md: "left" },
            px: { xs: 0, md: 10 },
          }}
        >
          <Typography
            sx={{
              fontSize: "60px",
              fontWeight: "bold",
              color: "white",
              lineHeight: "1",
            }}
          >
            MY EXPERIENCE
          </Typography>
        </Box>

        <Box
          sx={{
            flexBasis: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            sx={{
              color: "white",
              textAlign: "left",
              maxWidth: "920px",
              fontSize: "30px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            Freelance Developer
            <Box
              sx={{
                color: "gray",
                fontSize: "20px",
                fontWeight: "normal",
              }}
            >
              Nov 2023 - Present
            </Box>
          </Typography>
          <Typography
            sx={{
              color: "gray",
              textAlign: "left",
              maxWidth: "920px",
              fontSize: "20px",
              mt: 3,
            }}
          >
            พัฒนาและปรับปรุงส่วนติดต่อผู้ใช้สำหรับเว็บแอปพลิเคชั่นโดยใช้
            React.js
          </Typography>
          <Typography
            sx={{
              color: "gray",
              textAlign: "left",
              maxWidth: "920px",
              fontSize: "20px",
              mt: 1,
            }}
          >
            ทำงานร่วมกับทีมออกแบบ UX/UI เพื่อสร้างประสบการณ์ผู้ใช้ที่น่าประทับใจ
          </Typography>
          <Typography
            sx={{
              color: "gray",
              textAlign: "left",
              maxWidth: "920px",
              fontSize: "20px",
              mt: 1,
            }}
          >
            ปรับปรุงความเร็วในการโหลดเว็บไซต์ด้วยเทคนิคการเพิ่มประสิทธิภาพต่างๆ
          </Typography>
          <Typography
            sx={{
              color: "gray",
              textAlign: "left",
              maxWidth: "920px",
              fontSize: "20px",
              mt: 1,
            }}
          >
            ร่วมพัฒนาและดูแลไลบรารีคอมโพเนนต์ภายในองค์กร
          </Typography>
          <Box
            sx={{
              display: "flex",
              mt: 3,
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                color: "white",
                textAlign: "left",
                maxWidth: "920px",
                fontSize: "30px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Front-End Intern
              <Box
                sx={{
                  color: "gray",
                  fontSize: "20px",
                  fontWeight: "normal",
                }}
              >
                Sep 2023 - Nov 2023
              </Box>
            </Typography>
            <Typography
              sx={{
                color: "gray",
                textAlign: "left",
                maxWidth: "920px",
                fontSize: "20px",
                mt: 2,
              }}
            >
              พัฒนาเว็บไซต์ด้วย HTML, CSS และ JavaScript
            </Typography>
            <Typography
              sx={{
                color: "gray",
                textAlign: "left",
                maxWidth: "920px",
                fontSize: "20px",
                mt: 1,
              }}
            >
              ช่วยปรับปรุงการเข้าถึง "(accessibility)"
              ของเว็บไซต์ให้สอดคล้องกับมาตรฐาน WCAG
            </Typography>
            <Typography
              sx={{
                color: "gray",
                textAlign: "left",
                maxWidth: "920px",
                fontSize: "20px",
                mt: 1,
              }}
            >
              ทำงานร่วมกับทีมแบ็คเอนด์เพื่อเชื่อมต่อ API
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider
        sx={{ bgcolor: "gray", my: 6, mt: 6, mb: 6, mx: "auto", width: "100%" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          px: { xs: 2, md: 10 },
          py: 4,
        }}
      >
        <Box
          sx={{
            flexBasis: "40%",
            flexGrow: 0,
            textAlign: { xs: "center", md: "left" },
            px: { xs: 0, md: 10 },
          }}
        >
          <Typography
            sx={{
              fontSize: "60px",
              fontWeight: "bold",
              color: "white",
              lineHeight: "1",
            }}
          >
            LET'S CONNECT
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              mt: 4,
              color: "gray",
              lineHeight: "1",
            }}
          >
            Say hello at s6452410012@sau.ac.th
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              mt: 4,
              color: "gray",
              lineHeight: "1",
            }}
          >
            For more info, here's my resume
          </Typography>
          <IconButton aria-label="linkedin" sx={{ color: "#d4eb7c", mt: 4 }}>
            <LinkedIn />
          </IconButton>
          <IconButton
            aria-label="github"
            sx={{ color: "#d4eb7c", ml: 2, mt: 4 }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            aria-label="twitter"
            sx={{ color: "#d4eb7c", ml: 2, mt: 4 }}
          >
            <Twitter />
          </IconButton>

          <IconButton
            aria-label="instagram"
            sx={{ color: "#d4eb7c", ml: 2, mt: 4 }}
          >
            <Instagram />
          </IconButton>
          <Typography
            sx={{
              fontSize: "20px",
              mt: 50,
              color: "gray",
              lineHeight: "1",
            }}
          >
          © 2025 Tham Subsanong
          </Typography>
        </Box>

        <Box
          sx={{
            flexBasis: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontSize: "25px",
              color: "c7c7c7",
              lineHeight: "1",
            }}
          >
          Name
          </Typography>
          <TextField id="outlined-basic" label="" variant="outlined" sx={{mt: 2 ,backgroundColor: "#1a1a1a", width: "920px"}}/>
          <Typography
            sx={{
              fontSize: "25px",
              color: "c7c7c7",
              lineHeight: "1",
              mt: 4
            }}
          >
          Email
          </Typography>
          <TextField id="outlined-basic" label="" variant="outlined" sx={{mt: 2 ,backgroundColor: "#1a1a1a", width: "920px"}}/>
          <Typography
            sx={{
              fontSize: "25px",
              color: "c7c7c7",
              lineHeight: "1",
              mt: 4
            }}
          >
          Subject
          </Typography>
          <TextField id="outlined-basic" label="" variant="outlined" sx={{mt: 2 ,backgroundColor: "#1a1a1a", width: "920px"}}/>
          <Typography
            sx={{
              fontSize: "25px",
              color: "c7c7c7",
              lineHeight: "1",
              mt: 4
            }}
          >
          Message
          </Typography>
          <TextField id="filled-textarea" label="" variant="outlined" multiline  rows={6} sx={{mt: 2 ,backgroundColor: "#1a1a1a", width: "920px"}}/>
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "50px",
              height: "50px",
              width: "150px",
              mt: 2,
              fontSize: "15px",
              color: "black",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
// pages/components.tsx
'use client'
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
  IconButton,
  Modal,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import CreateComponentForm from "@/components/new-component"
import WidgetsIcon from '@mui/icons-material/Widgets';

const ComponentsPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container maxWidth="lg" sx={{ mt: 5, height: "100vh" }}>
      {/* Search Bar and Buttons */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
        gap={2}
      >
        {/* Search Field */}
        <TextField
          placeholder="Search Components..."
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "grey.500" }} />
              </InputAdornment>
            ),
          }}
          className="flex-1"
        />

        {/* Buttons */}
        <Box display="flex" gap={1} bgcolor={"#555"} sx={{borderRadius:'5px'}}>
          <IconButton>
            <GridViewIcon />
          </IconButton>
          <IconButton>
            <ListIcon />
          </IconButton>
        </Box>
        <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              textTransform: "none",
              marginLeft:"2px"
            }}
            onClick={handleOpen}
          >
            New
          </Button>
      </Box>

      {/* Empty State */}
      <Box
        
        sx={{
          color: "#aaa",
          textAlign: "center",
          py: 8,
          border: "2px dashed #333",
          borderRadius: 2,
        }}
      >
        <Box display="flex" justifyContent="center" mb={2}>
          <Box
            component="span"
            sx={{
              fontSize: 50,
              color: "#666",
            }}
          >
            <WidgetsIcon sx={{ fontSize: 40 }}/>
          </Box>
        </Box>
        <Typography variant="h6" fontWeight="bold" gutterBottom className="text-[#888] dark:text-gray-400">
          No Project Components
        </Typography>
        <Typography variant="body2" color="grey.500">
          Create a new component to get started.
        </Typography>
      </Box>
      {/* Modal for Creating New API/Component */}
      <Modal open={open} onClose={handleClose}>
        <CreateComponentForm onCreation={handleClose}/>
      </Modal>
    </Container>
  );
};

export default ComponentsPage;
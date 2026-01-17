import React from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { Typography, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import FlagIcon from "@mui/icons-material/Flag";

export default function MilestoneTimeline({ data = [] }) {
  // Flatten incoming BAIC timeline data into a simple events list
  const events = Array.isArray(data)
    ? data.flatMap((section) =>
        (section.items || []).map((item) => ({
          date: item.date,
          title: item.title,
          desc: item.description,
          period: section.period,
        }))
      )
    : [];

  // Status-based icons/colors: green check for done, pending only for 2023

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 6 }}>
      <Timeline
        position="alternate"
        sx={{
          [`& .MuiTimelineItem-root:before`]: { flex: 0, padding: 0 },
        }}
      >
        {events.map((item, index) => {
          const isPending = String(item.date).includes("2023");
          const icon = isPending ? (
            <HourglassTopIcon fontSize="small" />
          ) : (
            <CheckCircleIcon fontSize="small" />
          );
          const color = isPending ? "warning" : "success";

          return (
            <TimelineItem key={`${item.date}-${item.title}-${index}`}>
              <TimelineOppositeContent color="text.secondary">
                {item.date}
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot color={color}>{icon}</TimelineDot>
                {index !== events.length - 1 && <TimelineConnector />}
              </TimelineSeparator>

              <TimelineContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 0.5 }}
                >
                  {item.desc}
                </Typography>
                {item.period && (
                  <Typography variant="caption" color="text.secondary">
                    {item.period}
                  </Typography>
                )}
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Box>
  );
}

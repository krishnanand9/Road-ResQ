import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

/**
 * GET /api/users/profile
 * Get logged-in user's profile
 */
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    // User ID is added by authMiddleware
    const userId = (req as any).user.id;

    res.status(200).json({
      success: true,
      message: "User profile route is working",
      userId
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get user profile"
    });
  }
});

/**
 * GET /api/users/me
 * Get current logged-in user
 */
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const userId = (req as any).user.id;

    res.status(200).json({
      success: true,
      message: "Current user retrieved successfully",
      userId
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve user"
    });
  }
});

export default router;
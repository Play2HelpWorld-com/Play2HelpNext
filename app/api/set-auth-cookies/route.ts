import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { accessToken } = await request.json();

    // Create response with cookie setting
    const response = NextResponse.json({ 
      message: 'Cookies set successfully' 
    });
    console.log('process.env.Node_ENV:', process.env.NODE_ENV);
    console.log('process.env.COOKIE_DOMAIN:', process.env.COOKIE_DOMAIN);
    // Set access token cookie with domain
    response.cookies.set('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60,
      domain: process.env.COOKIE_DOMAIN || 'localhost',
      path: '/'
    });
    return response;
  } catch (error) {
    console.error('Cookie setting error:', error);
    return NextResponse.json(
      { error: 'Failed to set cookies' }, 
      { status: 500 }
    );
  }
}
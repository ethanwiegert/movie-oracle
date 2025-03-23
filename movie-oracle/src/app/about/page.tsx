'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/Navbar"

export default function About() {
  return (
    <>
      <Navbar userAvatar={""} userLoggedIn={""} />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-center mb-8">About Movie Oracle</h1>
          
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>Helping you discover your next favorite film</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Movie Oracle is your personal guide to the vast world of cinema. 
                Using advanced recommendation algorithms and a deep understanding 
                of film, we help connect you with movies you'll love.
              </p>
              <p>
                Whether you're a casual viewer or a dedicated cinephile, our platform 
                is designed to enhance your movie-watching experience by providing 
                thoughtful, personalized recommendations.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
              <CardDescription>The magic behind our recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Our platform analyzes various aspects of films including genres, 
                directors, actors, themes, and user ratings to create a sophisticated 
                understanding of what makes a movie appealing to different viewers.
              </p>
              <p>
                By combining this analysis with your personal preferences and viewing 
                history, we can suggest films that align with your taste while still 
                introducing you to new and exciting content.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}